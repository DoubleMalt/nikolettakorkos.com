var md = new window.Remarkable("commonmark");

$.get( "content/cv.md", function( data ) {
    $("#text-cv").html(md.render(data));
});