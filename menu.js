
async function addproduct() {
  let restaurantname = document.getElementById("resname").value
  let productname = document.getElementById("prodname").value
  let productprice = document.getElementById("prodprice").value
  let producttype = document.getElementById("prodtype").value
  let productimage = document.getElementById("prodimage").files[0]
  let imagename = productimage.name

  x = firebase.storage().ref("images").child(imagename)
  await x.put(productimage)
  let url = await x.getDownloadURL()

  //database
  let obj = {
      restaurantname,
      productname,
      productprice,
      producttype,
      url
  }

  console.log(obj)
  var key = (Math.random() * 92476829).toFixed()
  firebase.database().ref("orders/" + "id" + key).set(obj)

  alert("product added successfully")
  window.location.href="./dashboard.html"





}

