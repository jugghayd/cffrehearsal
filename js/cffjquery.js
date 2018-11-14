$(function() {
              $("#accordion").accordion({
                collapsible: true,
                heightStyle: "content"
              });
            });


            // Changes table tabs -->
            $(function() {
              $("#fall2015button").click(function() {
                $("#fall2015Table").removeClass("hidden", 0);
                $("#fall2015button").removeClass("hiddenButton", 0);
                $("#Christmas2015Table").addClass("hidden", 0);
                $("#christmas2015button").addClass("hiddenButton", 0);
                $("#winter2016Table").addClass("hidden", 0);
                $("#winter2016button").addClass("hiddenButton", 0);
              });
            });

            $(function() {
              $("#christmas2015button").click(function() {
                $("#fall2015Table").addClass("hidden", 0);
                $("#fall2015button").addClass("hiddenButton", 0);
                $("#Christmas2015Table").removeClass("hidden", 0);
                $("#christmas2015button").removeClass("hiddenButton", 0);
                $("#winter2016Table").addClass("hidden", 0);
                $("#winter2016button").addClass("hiddenButton", 0);
              });
            });

            $(function() {
              $("#winter2016button").click(function() {
                $("#fall2015Table").addClass("hidden", 0);
                $("#fall2015button").addClass("hiddenButton", 0);
                $("#Christmas2015Table").addClass("hidden", 0);
                $("#christmas2015button").addClass("hiddenButton", 0);
                $("#winter2016Table").removeClass("hidden", 0);
                $("#winter2016button").removeClass("hiddenButton", 0);
              });
            });

    // Makes all links open in a new tab
    $('a[href^="http://"], a[href^="https://"]').attr("target", "_blank");
