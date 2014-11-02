var md = new window.Remarkable("commonmark");

$.get( "content/workshops.md", function( data ) {
    $("#content-workshops").html(md.render(data));
});