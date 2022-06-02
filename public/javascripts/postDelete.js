console.log('Hello from delete script')

const deleteBtns = document.querySelectorAll('.delete-btn')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];
    
    btn.addEventListener('click', async(e) => {
        e.preventDefault()
        const postId = e.target.id.split('-')[2]
        const res = await fetch(`/posts/${postId}`, {
            method: 'DELETE'
        })

        const data = await res.json()
        if (data.message = "Success!") {
            const container = document.getElementById(`post-container-${postId}`)
            container.remove()
        } else {

        }
    })
}