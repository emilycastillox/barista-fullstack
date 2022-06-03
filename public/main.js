var ready = document.getElementsByClassName("fas fa-mug-hot");
var trash = document.getElementsByClassName("fa-trash");

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const order = this.parentNode.parentNode.childNodes[5].innerText       
        console.log(order,  name );
        fetch('orders', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'order': order,
          })
        }).then(function (response) {
          window.location.reload() //take the response and reload the page
        })
      });
});


Array.from(ready).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const order = this.parentNode.parentNode.childNodes[5].innerText //not finding it 
        const status = this.parentNode.parentNode.childNodes[7].innerText
        const barista = this.parentNode.parentNode.childNodes[9].innerText
        console.log("BAR", barista, "ORDER",order, "STAT", status, "NAME", name );
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'order': order,
            'status':status,
            'barista': barista
          })
        })

        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });

});