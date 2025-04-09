
const MenuItems = ({item}) => {
    const {image, price, name, recipe} = item;
    return (
        <div className='flex space-x-4'>
           <img src={image} alt="" className='w-[120px] rounded-b-full rounded-tr-full' /> 
           <div>
            <h3 className='uppercase'>{name}------</h3>
            <p>{recipe}</p>
           </div>
           <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItems;