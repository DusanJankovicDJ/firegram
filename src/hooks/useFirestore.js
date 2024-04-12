import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            //on every db update (image upload from the site) this function fires (snap)
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    console.log(documents)
                    documents.push({ ...doc.data(), id: doc.id }) //gets all data (spread ...)
                })
                
                setDocs(documents)
            })

        return () => unsub()
    }, [collection])

    return { docs }
}

export default useFirestore