console.log('hello from edit')

// find the edit buttons
// add event listener - when clicked, reveal form
// edit button should hide form if clicked again
// edit form should submit a fetch request
// create route handler for fetch request
// update the post
// send back a json response
// change the content of the post on the page

const editBtns = document.querySelectorAll('.edit-btn')

for (let i = 0; i < editBtns.length; i++) {
    const btn = editBtns[i];
    btn.addEventListener('click', (e) => {
        const postId = e.target.id.split('-')[2]
        const form = document.getElementById(`edit-form-${postId}`)
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden')
        } else {
            form.classList.add('hidden')
        }

        const submitBtn = document.getElementById(`edit-submit-${postId}`)
        submitBtn.addEventListener('click', async (submitEvent) => {
            submitEvent.preventDefault()
            const title = document.getElementById(`${postId}-edit-title`).value
            const content = document.getElementById(`${postId}-edit-content`).value

            // console.log(title, content)

            const res = await fetch(`/posts/${postId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    content
                })
            })

            const data = await res.json()
            if (data.message === 'Success!') {
                // console.log(data)
                const titleEle = document.getElementById(`${postId}-title`)
                const contentEle = document.getElementById(`${postId}-content`)
                titleEle.innerHTML = data.post.title
                contentEle.innerHTML = data.post.content
                form.classList.add('hidden')
            } else {
                // create elements with error message
            }
        })

    })
}