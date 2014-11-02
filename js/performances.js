var md = new window.Remarkable("commonmark");

$.get( "content/performances.md", function( data ) {
    $("#text-performances").html(md.render(data));
});