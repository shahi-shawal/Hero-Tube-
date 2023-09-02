const loadCategory = async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data = await res.json();
    const getData= data.data;
    displayCategory(getData);
}

const displayCategory = (getData)=>{
    const categoryId = document.getElementById('categoryId');
    getData.forEach(categoris => {
        const div = document.createElement('div');
        div.className = `tabs tabs-boxed`;
        div.innerHTML = `
        <a onclick="contentBtn('${categoris.category_id}')" class="tab tab-active">${categoris.category}</a>        `
      categoryId.appendChild(div)
    });
}

 const contentBtn = async(id)=>{
      const res= await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
      const data = await res.json();
      const getData2 = data.data;
      contentDisplay(getData2);
 } 
 
 const contentDisplay = (getData2)=>{
    const contetCard = document.getElementById('contetCard');
    contetCard.textContent="";
    if (getData2.length > 0) {
        
        getData2?.forEach((content) => {
           

            const div = document.createElement('div');
            div.className = `card bg-base-100 shadow-xl mt-6`;
            div.innerHTML=`
                    <figure class="w-70 h-80">
                    <div class="indicator">
                    <span class="indicator-item indicator-bottom indicator-end mx-[110px] bg-black text-white">${content.others.posted_date? ((Math.floor(content.others.posted_date/3600))+"hr ")+ (Math.floor(content.others.posted_date%3600/60)+"min ") +
                    (Math.floor(content.others.posted_date%60)+" sec ago") : ""
                }</span> 
                    <img class="w-70 h-60" src="${content?.thumbnail}  " alt="Shoes" />
                    </figure>
                    <div class="card-body">
                    <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src="${content.authors[0].profile_picture}" />
                    </div>
                    <h2 class="card-title p-2">${content.title}</h2>
                    </div>
                    <div class="mx-16">
                    <p class="">${content.authors[0].profile_name}${content.authors[0].verified? '<img src="./bluetik.png">' : ""  }</p>
                    <p>${content.others.views} views </p>
                    </div>
            
            `
            contetCard.appendChild(div)

        }
    )  
    } else {
    
        const div = document.createElement('div');
        div.className = `` 
        div.innerHTML= `
                     
                       <div class="flex justify-center items-center">
                       <div class="mt-20 pr-96 mr-[-1500px]">
                       <img class= "w-auto h-80" src="./icon.png">
                       <h2 class="text-4xl font-bold">Oppps!! No Data Found</h2>
                       </div>
                       </div>
                
        `
        contetCard.appendChild(div);
}
 }


 const displaySort = async(id)=>{
    const res = await fetch`https://openapi.programming-hero.com/api/videos/category/1000`
    const data = await res.json();
    const data2= data.data
    sortFun(data2)
    const contetCard = document.getElementById('contetCard');
    contetCard.textContent="";
    if (data2.length > 0) {
        
        data2?.forEach((content) => {
           

            const div = document.createElement('div');
            div.className = `card bg-base-100 shadow-xl mt-6`;
            div.innerHTML=`
                    <figure class="w-70 h-80">
                    <div class="indicator">
                    <span class="indicator-item indicator-bottom indicator-end mx-[110px] bg-black text-white">${content.others.posted_date? ((Math.floor(content.others.posted_date/3600))+"hr ")+ (Math.floor(content.others.posted_date%3600/60)+"min ") +
                    (Math.floor(content.others.posted_date%60)+" sec ago") : ""
                }</span> 
                    <img class="w-70 h-60" src="${content?.thumbnail}  " alt="Shoes" />
                    </figure>
                    <div class="card-body">
                    <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src="${content.authors[0].profile_picture}" />
                    </div>
                    <h2 class="card-title p-2">${content.title}</h2>
                    </div>
                    <div class="mx-16">
                    <p class="">${content.authors[0].profile_name}${content.authors[0].verified? '<img src="./bluetik.png">' : ""  }</p>
                    <p>${content.others.views} views </p>
                    </div>
            
            `
            contetCard.appendChild(div)

        }
    )  
    } else {
    
        const div = document.createElement('div');
        div.className = `` 
        div.innerHTML= `
                     
                       <div class="flex justify-center items-center">
                       <div class="mt-20 pr-96 mr-[-1500px]">
                       <img class= "w-auto h-80" src="./icon.png">
                       <h2 class="text-4xl font-bold">Oppps!! No Data Found</h2>
                       </div>
                       </div>
                
        `
        contetCard.appendChild(div);
}
 }



const sortFun = (data)=>{
    data.sort((a,b)=>{
        let x = parseInt(a.others.views);
        let y = parseInt(b.others.views);
        if (x > y) {
            return -1
        }
        else if (x < y){
            return 1
        }
        else{
            return 0
        }
    })
}



const sortBtn=()=>{
    displaySort();
}









loadCategory();
contentBtn('1000')