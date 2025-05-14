import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// const useStore = create((set) => ({
//   data: null, // محل ذخیره دیتا
//   loading: false,
//   error: null,

//   // اکشن برای گرفتن دیتا از API
//   fetchData: async () => {
//     set({ loading: true, error: null })
//     try {
//       console.log(234)
//       const res = await fetch('https://membersgram.com/wp-json/wp/v2/posts?per_page=100&page=1&_embed&categories=224');
//     console.log(res)
//       const result = await res.json()
//       set({ data: result, loading: false })
//     } catch (err) {
//       set({ error: err.message, loading: false })
//     }
//   }
// }))
const useStore = create(
  persist(
    (set) => ({
      data: null,
      loading: false,
      error: null,
      fetchData: async () => {
        set({ loading: true, error: null })
        try {
          const res = await fetch('https://membersgram.com/wp-json/wp/v2/posts?per_page=100&page=1&_embed&categories=224')
          const result = await res.json()
          set({ data: result, loading: false })
        } catch (err) {
          set({ error: err.message, loading: false })
        }
      }
    }),
    {
     name: 'data-storage',
  
    }
  )
)
export default useStore