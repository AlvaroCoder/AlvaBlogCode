import React from 'react'

function PostDetail({post}) {
    const getContentFragment = (index, text, obj, type)=>{
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = (<b key={index}>{text}</b>)
            }
            if (obj.italic) {
                modifiedText = (<em key={index}>{text}</em>);
              }
        
              if (obj.underline) {
                modifiedText = (<u key={index}>{text}</u>);
              }
        }
        switch (type) {
            case 'heading-one':
                return <h1 key={index} className='text-white text-3xl font-semibold mb-2'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>        
            case 'heading-two':
                return <h2 key={index} className='text-white text-2xl font-semibold mb-2'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>
            case 'heading-three':
                return <h3 key={index} className='text-white text-xl font-semibold mb-2'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
            case 'paragraph':
                return <p key={index} className='text-white mb-8'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
            case 'image':
                return(
                    <img
                        key={index}
                        alt={obj.title}
                        src={obj.src}
                    />
                )
            case 'code-block':
                return <div key={index} className=' bg-black_3 p-4 rounded-md mb-4'>
                    <code className='font-mono whitespace-pre-wrap text-title_white overflow-x-auto'>
                        {modifiedText.map((item,i)=><React.Fragment  key={i}>{item}</React.Fragment>)}
                    </code>
                </div>
            default:
                return modifiedText;
        }
    }
    return (
        <>
            {post.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                return getContentFragment(index, children, typeObj, typeObj.type);
            })}
        </>
    )
}

export default PostDetail;