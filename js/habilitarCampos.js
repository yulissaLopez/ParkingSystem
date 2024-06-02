export function habilitarCampos(input){
    if(input.disabled == true){
        input.value = "";
        input.disabled = false;
        
    }else{
        input.disabled = true;
    }
}