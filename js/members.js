/* root/js/members.js */

// フォーマット定義
// type: 'Photographer', 'Model', 'HM', 'Owner'
// status: 'Active' (募集中), 'Busy' (受付停止中)

const membersData = [
    {
        id: 'p001',
        type: 'Photographer',
        name: 'Takumi Y.',
        status: 'Active',
        location: 'Tokyo / Kanagawa',
        images: [
            'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800', // メイン
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800'  // サブ
        ],
        // ★ 自己紹介フォーマット（必須項目）
        specs: {
            experience: '5年',
            gear: 'Leica M6, Sony α7IV',
            style: 'Street, Documentary, Portrait',
            fee: '相互無償 (交通費別) or ¥10,000~', // 報酬条件の明示
        },
        // ★ 哲学・ステートメント（最重要）
        philosophy: '写真は引き算であると考えています。過度な演出を避け、その場の光と空気感を定着させることに重きを置いています。',
        
        // ★ 連絡先（SNSリンクなど）
        contact: {
            instagram: 'https://instagram.com/xxx',
            email: 'mailto:test@example.com'
        }
    },
    {
        id: 'm001',
        type: 'Model',
        name: 'Yuri A.',
        status: 'Active',
        location: 'Osaka / Kyoto',
        images: [
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800'
        ],
        specs: {
            experience: '3年',
            height: '162cm',
            style: 'Dark, Mode, Film',
            fee: '¥5,000 / h + 交通費',
        },
        philosophy: 'ただ綺麗に写るのではなく、感情の揺らぎや、そこに在る違和感のようなものを表現したいです。対話を重視できる方と作品を作りたいです。',
        contact: {
            instagram: 'https://instagram.com/yyy',
            email: null // メール不可設定も可
        }
    }
    // ...人数分追加
];
