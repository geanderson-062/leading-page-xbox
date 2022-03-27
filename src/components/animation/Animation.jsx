import React from "react";//importante sempre importar o react 
import "@lottiefiles/lottie-player";

export default function Animacao() {

//devemos sempre exportar a função como padrão e dar um nome para ela 

    return ( //importante uasr o return e <> para indicar inicio do jsx e </> para indicar o fim
     <>

<lottie-player className="Animacao"
  autoplay
//  controls
  loop
  mode="normal"
  src="https://assets4.lottiefiles.com/private_files/lf30_1SRcwK.json"
  style={{ width: "120px", height: "120px"}}
>
</lottie-player>

    </>
        
    )
    
}