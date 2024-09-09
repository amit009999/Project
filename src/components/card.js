


const card = ({title, content})=>{


    return(

            <div class="flex flex-1 flex-col items-center justify-center bg-green-700">
                    <h1 class = "text-sm mt-2"> {title}</h1>
                    <h1 class = "text-4xl mt-5"> {content}</h1>
            </div>
            
    );
}


export default card;