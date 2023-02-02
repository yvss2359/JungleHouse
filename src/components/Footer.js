import { useState } from 'react'
import '../styles/Footer.css'



function Footer() {
	const [inputValue, setInputValue] = useState('')

    function checkValue(value) {
        if (!value.includes('@')) {
           alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.`)
        }
    }

    function hundleInput(e){
        setInputValue(e.target.value)
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
                Laissez-nous votre mail :
                
            </div>


            <input  
                    placeholder='Entrez votre mail'
                    value={inputValue}
                    onChange={(e) => hundleInput(e) }
                    onBlur={(e) => checkValue(e.target.value)}
                />
		</footer>
	)
}



export default Footer