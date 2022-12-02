

interface ToggleButtonProps {
     toggleButton : any
} 



const ToggleButton = ( {toggleButton} : ToggleButtonProps) => {
     return (
          <button onClick={toggleButton}>
              CLick me to toggle themes
          </button>
     )
}


export default ToggleButton