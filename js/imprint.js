var md = new window.Remarkable("commonmark");

$.get( "content/imprint.md", function( data ) {
    $("#text-imprint").html(md.render(data));
});