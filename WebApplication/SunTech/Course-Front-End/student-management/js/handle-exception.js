
/* ------ Start Functions Declaration ------*/
function handleExceptionsForPage() {
    // Handle exception of localStorage which is not supported by some Browsers in some cases.
    if (typeof(localStorage) === 'undefined') {
        document.write('handleExceptionsForPage()<br>');
        handleExceptionOfLocalStorage();
    }
}

function handleExceptionOfLocalStorage() {
    document.write('handleExceptionOfLocalStorage()<br>');
    let exceptionObject = {
        messageForAlertNotification : 'abc', 
        messageForStudentDataTable  : 'def'
    };
    document.write('exceptionObject = ' + exceptionObject + '<br>');
    document.write('exceptionObject.messageForAlertNotification = ' + exceptionObject.messageForAlertNotification + '<br>');
    document.write('exceptionObject.messageForStudentDataTable = ' + exceptionObject.messageForStudentDataTable + '<br>');

    let currentBrowser = getCurrentBrowser().toLowerCase().trim();
    document.write('currentBrowser = ' + currentBrowser + '<br>');

    if (currentBrowser === 'safari') {
        document.write('using safari');
        document.write('exceptionObject = ' + exceptionObject + '<br>');
        document.write('typeof(exceptionObject) = ' + typeof(exceptionObject) + '<br>');
        document.write('exceptionObject.messageForAlertNotification = ' + exceptionObject.messageForAlertNotification + '<br>');
        document.write('exceptionObject.messageForStudentDataTable = ' + exceptionObject.messageForStudentDataTable + '<br>');
        throwExceptionMessagesInSafari(exceptionObject);
    } else if (currentBrowser === 'edge') {
        throwExceptionMessagesInEdge(exceptionObject);
    } else {
        throwExceptionMessagesInOtherBrowsers(exceptionObject);
    }
}

function throwExceptionMessagesInSafari(exceptionObject) {
    exceptionObject.messageForAlertNotification = `
        Chức năng này không khả dụng do Safari ở chế độ thông thường (Public) không hỗ trợ lưu trữ dữ liệu.<br>
        Bạn vui lòng chuyển Trình duyệt sang chế độ riêng tư (Private) để sử dụng chương trình.
    `;

    exceptionObject.messageForStudentDataTable = `
        Safari ở chế độ thông thường (Public) không hỗ trợ lưu trữ dữ liệu (Local Storage).<br>
        Bạn vui lòng chuyển Trình duyệt sang chế độ riêng tư (Private) để sử dụng chương trình.
    `;

    throw exceptionObject;
}

function throwExceptionMessagesInEdge(exceptionObject) {
    exceptionObject.messageForAlertNotification = `
        Chức năng này không khả dụng do Microsoft Edge không hỗ trợ lưu trữ dữ liệu khi chạy trực tiếp HTML File.<br>
        Bạn vui lòng chạy File chương trình qua http/https server.<br>
        Hoặc bạn có thể sử dụng Trình duyệt khác như: Chrome, Opera hoặc Firefox.
    `;

    exceptionObject.messageForStudentDataTable = `
        Microsoft Edge không hỗ trợ lưu trữ dữ liệu (Local Storage) khi chạy trực tiếp HTML File.<br>
        Bạn vui lòng chạy File chương trình qua http/https server (localhost, GitHub, ...).<br>
        Hoặc bạn có thể sử dụng Trình duyệt khác như: Chrome, Opera hoặc Firefox.
    `;

    throw exceptionObject;
}

function throwExceptionMessagesInOtherBrowsers(exceptionObject) {
    exceptionObject.messageForAlertNotification = `
        Chức năng này không khả dụng do Trình duyệt hiện tại không hỗ trợ lưu trữ dữ liệu.<br>
        Bạn vui lòng chuyển qua Trình duyệt khác như: Chrome, Opera hoặc Firefox để sử dụng chương trình.
    `;

    exceptionObject.messageForStudentDataTable = `
        Trình duyệt hiện tại không hỗ trợ lưu trữ dữ liệu (Local Storage).<br>
        Bạn vui lòng chuyển qua Trình duyệt khác như: Chrome, Opera hoặc Firefox để sử dụng chương trình.
    `;

    throw exceptionObject;
}

function handleUndefinedException(isFunctionCallOnLoadPage = true) {
    let messageForAlertNotification = `
        Chức năng này không khả dụng do xảy ra lỗi chưa xác định.<br>
        Bạn vui lòng liên hệ với Tác giả của chương trình để được trợ giúp.
    `;

    let messageForStudentDataTable = `
        Lỗi chưa xác định !!!<br>
        Bạn vui lòng liên hệ với Tác giả của chương trình để được trợ giúp.
    `;

    if (isFunctionCallOnLoadPage) {
        initializeSettingsWhenException(messageForAlertNotification);
        renderTableForErrorInfo(messageForStudentDataTable);
    } else {
        sendAlertNotification(`${messageForAlertNotification}`, 6000);
    }
}

function renderTableForErrorInfo(exceptionMessage) {
    let tableContent = TABLE_HEADER;

    tableContent += `
        <tr class="error-info">
            <td align="center" colspan="${TABLE_COLUMN_COUNT}">
                ${exceptionMessage}
            </td>
        </tr>
    `;

    tblStudentInfoList.innerHTML = tableContent;
}
/* ------ End Functions Declaration ------*/