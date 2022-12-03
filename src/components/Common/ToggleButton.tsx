

interface ToggleButtonProps {
    toggleTheme : any
} 



const ToggleButton = ( {toggleTheme} : ToggleButtonProps) => {
     return (
          <button onClick={toggleTheme}>
              CLick me to toggle themes
          </button>
     )
}


export default ToggleButton