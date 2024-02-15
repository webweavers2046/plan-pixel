import React from "react";

const Loading = ({ isHeight }) => {
    return (
        <div
            class={`flex items-center justify-center w-full ${
                isHeight && "h-full"
            } `}
        >
            <div class="px-3 py-1 text-xs font-medium leading-none text-center text-primary bg-primary/15 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                loading...
            </div>
        </div>
    );
};

export default Loading;
