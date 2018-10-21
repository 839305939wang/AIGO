
const remote = require("electron").remote;
const ffi = remote.require("ffi");
export default{
    User32:(()=>{
        return ffi.Library('user32', {
                'GetWindowLongPtrW': ['int', ['int', 'int']],
                'SetWindowLongPtrW': ['int', ['int', 'int', 'long']],
                'GetSystemMenu': ['int', ['int', 'bool']],
                'DestroyWindow': ['bool', ['int']]
            })
    })()
};