import React from 'react'
import homebg from '../../assets/images/Devblog.webp'
import postImg1 from '../../assets/images/post1.png'
import postImg2 from '../../assets/images/post2.png'
import BlogPost from './BlogPost'
const Devblog = () => {

    const posts = [
        {
          id: 1,
          image: postImg1,
          date: '9/1/2024',
          title: 'Thrones of Ages PRE  REGISTER  NOW  TO  GET WHITELISTED',
          description: 'Ready to be pre listed? Get your whitelist now and be ready.',
        },
        {
          id: 2,
          image: postImg2,
          date: '1/10/2024',
          title: 'The beginning of Thrones of Ages',
          description: 'Beginning of the game Developing game',
        },
        
      ];


    return (
        <div className='bg-black-800 pt-7 pb-28 md:pt-36 bg-cover bg-no-repeat bg-current text-white' style={{ backgroundImage: `url(${homebg})` }}>
            <div className='max-w-[1320px] px-4 lg:px-0 mt-24 pb-6 mx-auto grid grid-cols-1'>
                <span className='mb-3 font-Bai-Jamjuree uppercase tracking-widest'>DEVBLOG</span>
                <h1 className='text-5xl  font-medium capitalize leading-[64px] font-Ringbearer'>
                    News, updates & <span className='Thrones'> Announcements </span>
                </h1>
            </div>

            <div className='max-w-[1320px] mx-auto grid grid-cols-1 px-3 lg:px-0 sm:grid-cols-2 gap-6 '>
                {posts.map(post => (
                    <BlogPost
                        key={post.id}
                        image={post.image}
                        date={post.date}
                        title={post.title}
                        description={post.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Devblog
