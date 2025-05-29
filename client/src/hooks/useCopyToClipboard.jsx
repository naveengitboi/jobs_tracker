import React, {useState, useCallback} from 'react'

function useCopyToClipboard() {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = useCallback(async (text) => {
        if(navigator.clipboard){
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000)

        }else{
            console.log("Not working")
        }
    }, [])

    return [copyToClipboard, isCopied];
}

export default useCopyToClipboard