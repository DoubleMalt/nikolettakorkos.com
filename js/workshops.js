var md = new window.Remarkable("commonmark");

$.get( "content/workshops.md", function( data ) {
    $("#text-workshops").html(md.render(data));
});