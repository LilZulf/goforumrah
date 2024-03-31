"use client"

interface CalloutProps {
    children : React.ReactNode;
}

const Callout: React.FC<CalloutProps> = (params: CalloutProps) => {
    return (
        <div className="p-3 mb-4 rounded-1 border border-5 border-info 
        border-start-5 border-end-0 border-top-0 border-bottom-0"
        style={{backgroundColor: '#f8f8fd'}}
        >
            {params.children}
        </div>
    )
}

export default Callout