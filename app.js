const YMDInput = document.querySelector(".YMDInput");
const GRAInput = document.querySelector(".GRAInput");
const CLAInput = document.querySelector(".CLAInput");
const SEMInput = document.querySelector(".SEMInput");

let SEM = 0;
let YMD = 0;
let GRADE = 0;
let CLASS = 0;
const TIME = 0;

const handleClick = () => {
    fetch(`https://open.neis.go.kr/hub/hisTimetable?KEY=b6c91682e75c4125ace90f142a1bd501&Type=json&pIndex=1&pSize=10&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&AY=2022&SEM=${SEM}&ALL_TI_YMD=${YMD}&GRADE=${GRADE}&CLASS_NM=${CLASS}`,)
        .then((res) => res.json())
        .then((json) => {for(let i =0; i<7; i++){
            const inner = document.getElementById(`${i}`); 
            try{
                inner.innerText = `${i+1}교시 ${json.hisTimetable[1].row[i].ITRT_CNTNT}`;
            }
            catch{
                inner.innerText = `${i+1}교시 데이터값 없음`;
            }
        }})
}

const handleChange = (event) => {
    if(event.target == GRAInput){
        GRADE = event.target.value;
    }
    if(event.target == YMDInput){
        YMD = event.target.value;
    }
    if(event.target == CLAInput){
        CLASS = event.target.value;
    }
    if(event.target == SEMInput){
        SEM = event.target.value;
    }
    handleClick();
}

YMDInput.addEventListener("change", handleChange);
GRAInput.addEventListener("change", handleChange);
CLAInput.addEventListener("change", handleChange);
SEMInput.addEventListener("change", handleChange);