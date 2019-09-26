const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
<h3>Add a Page</h3>
<hr>
<form method="POST" action="/wiki/">
  <div class="form-group">
    <label for="author" class="col-sm-2 control-label">Author Name</label>
    <div class="col-sm-10">
      <input id="author" name="author" type="text" class="form-control"/>
    </div>
      
    <label for="email" class="col-sm-2 control-label">Author Email</label>
    <div class="col-sm-10">
      <input id="email" name="email" type="email" class="form-control"/>
    </div>
 
    <label for="title" class="col-sm-2 control-label">Page Title</label>
    <div class="col-sm-10">
      <input id="title" name="title" type="text" class="form-control"/>
    </div>
  

    <label for="content" class="col-sm-2 control-label">Page Content</label>
    <div class="col-sm-10">
      <input id="content" name="content" type="textarea" cols="40" rows="5" style="width:100%; height:100px;" class="form-control"/>
    </div>
  
   
    <div class="col-sm-10">
      <input id="status" name="status" type="hidden" class="form-control"/>
    </div>

</div>
  <div class="col-sm-offset-2 col-sm-10">
    <button type="submit" class="btn btn-primary">submit</button>
  </div>

</form>
`)



// const addPageHTML = layout(html`
//   <h3>Add a Page</h3>
//   <hr>
//   <form method="POST" action="/wiki/">
    
//     <div>PLACEHOLDER FOR AUTHOR NAME FIELD</div>
    
//     <div>PLACEHOLDER FOR AUTHOR EMAIL FIELD</div>
    
//     <div class="form-group">
//       <label for="title" class="col-sm-2 control-label">Page Title</label>
//       <div class="col-sm-10">
//         <input id="title" name="title" type="text" class="form-control"/>
//       </div>
//     </div>

//     <div>PLACEHOLDER FOR PAGE CONTENT TEXTAREA FIELD</div>
    
//     <div>PLACEHOLDER FOR PAGE STATUS INPUT FIELD</div>

//     <div class="col-sm-offset-2 col-sm-10">
//       <button type="submit" class="btn btn-primary">submit</button>
//     </div>
  
//   </form>
// `);

// module.exports = addPageHTML