<!DOCTYPE html>

<html xmlns:th="http://www.thymeleaf.org">

<!-- 12 -->
<div class="lesson-page-wrapper">
    <div class="adoc-content" th:replace="doc:lessons/chromedevtools/documentation/ChromeDevTools_intro.adoc"></div>
</div>

<!-- 2 -->
<div class="lesson-page-wrapper">
    <div class="adoc-content" th:replace="doc:lessons/chromedevtools/documentation/ChromeDevTools_elements.adoc"></div>
</div>

<!-- 3 -->
<div class="lesson-page-wrapper">
    <div class="adoc-content" th:replace="doc:lessons/chromedevtools/documentation/ChromeDevTools_console.adoc"></div>
</div>

<!-- 4 -->
<div class="lesson-page-wrapper">
    <div class="adoc-content" th:replace="doc:lessons/chromedevtools/documentation/ChromeDevTools_Assignment.adoc"></div>
    <div class="attack-container">
        <div class="assignment-success"><i class="fa fa-2 fa-check hidden" aria-hidden="true"></i></div>
        <form class="attack-form" accept-charset="UNKNOWN"
              method="POST" name="DOMFollowUp"
              action="/WebGoat/ChromeDevTools/dummy">
            <input name="successMessage" value="" type="TEXT" />
            <input name="submitMessage" value="Submit" type="SUBMIT"/>
        </form>
        <div class="attack-feedback"></div>
        <div class="attack-output"></div>
    </div>
</div>

<!-- 5 -->
<div class="lesson-page-wrapper">
    <div class="adoc-content" th:replace="doc:lessons/chromedevtools/documentation/ChromeDevTools_sources.adoc"></div>
</div>

<!-- 6 -->
<div class="lesson-page-wrapper">
    <div class="adoc-content" th:replace="doc:lessons/chromedevtools/documentation/ChromeDevTools_Assignment_Network.adoc"></div>
    <div class="attack-container">
        <div class="assignment-success"><i class="fa fa-2 fa-check hidden" aria-hidden="true"></i></div>
        <form class="attack-form" accept-charset="UNKNOWN"
              method="POST" name="form"
              action="/WebGoat/ChromeDevTools/network">
            <script>
                // sample custom javascript in the recommended way ...
                // a namespace has been assigned for it, but you can roll your own if you prefer
                document.getElementById("btn").addEventListener("click", function() {
                    document.getElementById("networkNum").value = Math.random() * 100;
                    document.getElementById("networkNumCopy").value = document.getElementById("networkNum").value;
                });
            </script>
            <input type="hidden" name="networkNum" id="networkNum" value="foo" />
            <table>
                <tr>
                    <td>Click this button to make a request:</td>
                    <td><input id="btn" name="SUBMIT" value="Go!" type="SUBMIT" /></td>
                    <td></td>
                </tr>
            </table>
        </form>

        <form class="attack-form" accept-charset="UNKNOWN"
              method="POST" name="form"
              action="/WebGoat/ChromeDevTools/network">
            <table>
                <tr>
                    <td>What is the number you found:   </td>
                    <td><input name="number" type="text"/></td>
                    <td><input type="submit" name="Submit" value="check"/></td>
                    <td></td>
                </tr>
            </table>
            <input type="hidden" name="network_num" id="networkNumCopy" value="foo" />
        </form>
        <div class="attack-feedback"></div>
        <div class="attack-output"></div>
    </div>
</div>

</html>
