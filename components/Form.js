    import React from "react";

    function Form(props) {
    return (
    <div className="flex">
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 flex items-center mx-auto my-8">
        <form
            className="space-y-6"
            onSubmit={(event) => {
            event.preventDefault();
            const description = fileDescription.value;
            props.uploadFile(description);
            }}
            action="#"
        >
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Share File!
            </h5>
            <div>
            <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
                File Description:
            </label>
            <textarea
                id="message"
                rows="4"
                className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // ref={(input) => { props.fileDescription = input }}
                placeholder="Enter Text here..."
            ></textarea>
            </div>
            <div>
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="user_avatar"
            >
                Upload file
            </label>
            <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                onChange={props.captureFile}
                type="file"
            ></input>
            </div>
            <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Upload
            </button>
        </form>
        </div>
    </div>
    );
    }

    export default Form;
