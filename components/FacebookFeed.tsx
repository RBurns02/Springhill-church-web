const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
const TOKEN = process.env.FACEBOOK_PAGE_TOKEN;

type FBPost = {
  id: string;
  message?: string;
  story?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
};

async function fetchPosts(): Promise<FBPost[] | null> {
  if (!PAGE_ID || !TOKEN) return null;

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PAGE_ID}/posts?fields=message,story,full_picture,permalink_url,created_time&limit=4&access_token=${TOKEN}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.data ?? null;
  } catch {
    return null;
  }
}

export default async function FacebookFeed() {
  const posts = await fetchPosts();

  if (!posts || posts.length === 0) {
    return (
      <a
        href="https://www.facebook.com/share/1GpFMM7VC2/"
        target="_blank"
        rel="noopener noreferrer"
        className="card p-5 group flex items-center gap-4"
      >
        <div className="w-11 h-11 border border-stone-200 flex items-center justify-center flex-shrink-0 text-stone-500 group-hover:border-church-gold group-hover:text-church-gold transition-all duration-300">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <p className="eyebrow text-stone-400 mb-1">Facebook</p>
          <p className="font-serif font-semibold text-stone-900 text-sm truncate">Springhill Pentecostal</p>
        </div>
        <span className="flex-shrink-0 text-xs font-semibold tracking-[0.1em] uppercase text-church-gold group-hover:text-church-deep transition-colors">Follow →</span>
      </a>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {posts.map((post) => {
        const text = post.message || post.story || '';
        const date = new Date(post.created_time).toLocaleDateString('en-US', {
          month: 'long', day: 'numeric', year: 'numeric',
        });

        return (
          <a
            key={post.id}
            href={post.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="card group overflow-hidden flex flex-col"
          >
            {post.full_picture && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.full_picture}
                alt=""
                className="w-full h-44 object-cover"
              />
            )}
            <div className="p-6 flex flex-col flex-1">
              {text && (
                <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-4 flex-1">
                  {text}
                </p>
              )}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100">
                <span className="text-xs text-stone-400">{date}</span>
                <span className="text-xs font-semibold tracking-[0.1em] uppercase text-church-gold group-hover:text-church-deep transition-colors">
                  View Post →
                </span>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
