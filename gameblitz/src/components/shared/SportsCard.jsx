

function SportsCard({name, image ,description}) {
  return (
    <div className='w-80 h-80  pb-4 bg-(--text-white) rounded-md  hover:shadow-[2px_0px_35px_rgba(0,0,0,0.25)]'>
       
        <img className="w-80 h-48 object-cover rounded-md mb-2" src={image} alt="" />
         <div className="px-4">
            <h3 className="text-2xl text-(--orange) font-bold">{name}</h3>
        <p className="font-medium text-(--text-grey)">{description}</p>
         </div>
    </div>
  )
}

export default SportsCard
