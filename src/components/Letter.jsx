function Letter(props) {
 
  const handleClick = () => {
    props.validateLetter(props.id)
  }
  
  return (
    <button onClick={handleClick} disabled={props.clicked} className={`p-0.5 border-2 cursor-pointer border-neutral-800 rounded-md size-10 hover:bg-neutral-800 transition-colors  ${props.clicked ? 'text-pink-600 hover:bg-neutral-900 hover:cursor-default' : 'text-white'} sm:size-16 sm:text-3xl`}>{props.children}</button>
  )
}

export default Letter