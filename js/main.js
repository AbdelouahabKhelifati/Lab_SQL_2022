// if we're not in print mode start impress
if ( !window.location.search.match(/print/) ) {
  try{
    impress().init();

    //Add slide counters
    var forEach = Array.prototype.forEach
      , keys = Object.keys
      , steps = document.querySelectorAll(".step:not([data-support='true'])")

    forEach.call(steps, function (dom, index) {
        if (dom.id !== 'overview') {
            var wrap = document.createElement("div");
            wrap.className = 'wrap';
            while (dom.firstChild) {
                wrap.appendChild(dom.firstChild);
            }
            dom.appendChild(wrap);
            var counter = wrap.appendChild(document.createElement('div'));
            counter.className = "counter";
            counter.innerHTML = (index + 1) + " / " + steps.length;
        }
    });
  }catch(err) {
     // noop
  }
} else {
  //show all substeps
  var substeps = document.querySelectorAll(".substep");
  Array.prototype.forEach.call(substeps,function(dom, index) {
    dom.classList.add("active");
  });

  //we use the preview class on print
  document.body.classList.add("preview");
}
