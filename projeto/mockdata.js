let users = [
    {id:1,
    first_name:"Lauren",last_name:"Shaxby",email:"lshaxby0@php.net",created_at:"16/10/2021"},
    {id:2,first_name:"Ardenia",last_name:"Paddingdon",email:"apaddingdon1@nsw.gov.au",
    created_at:"27/07/2021"},
    {id:3,first_name:"Renaldo",last_name:"Alenichev",email:"ralenichev2@ftc.gov"
    ,created_at:"10/06/2021"},
    {id:4,first_name:"Nichole",last_name:"OHeneghan",email:"noheneghan3@flavors.me",created_at:"28/06/2021"},
    {id:5,first_name:"Haywood",last_name:"Daintry",email:"hdaintry4@nhs.uk",created_at:"18/03/2021"}

]

function onDeleteRow(e) {
    if (!e.target.classList.contains("btn2")) {
      return;
    }

    const btnc = e.target;
    btnc.closest("tr").remove();
  }
  
table = document.querySelector("table")
table.addEventListener("click", onDeleteRow);

function render() {
    table = document.querySelector("table")
    users.forEach((user) =>{
        row = document.createElement("tr")
        celula1 = document.createElement("td")
        celula2 = document.createElement("td")
        celula3 = document.createElement("td")

        var btn = document.createElement('input'); 
        btn.type = "button"; 
        btn.className = "btn";
        btn.value = "Editar";

        var btn2 = document.createElement('input'); 
        btn2.type = "button"; 
        btn2.className = "btn2";
        btn2.value = "Excluir";

        var id = user.id;

        celula1.textContent = user.first_name + user.last_name
        celula2.textContent = user.email
        celula3.textContent = user.created_at
        row.appendChild(celula1)
        row.appendChild(celula2)
        row.appendChild(celula3)
        row.appendChild(btn)
        row.appendChild(btn2)
        
    
        table.appendChild(row)
    })
    
}
render()