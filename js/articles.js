/* root/js/articles.js */

const articlesData = [
    // 最新の記事を一番上にしてください
    {
        id: 'stieglitz-nyc', // フォルダ名と一致させる
        category: 'History',
        subCategory: 'Context', // サブカテゴリがない場合はCategoryと同じでもOK
        date: '2024.05.10',
        title: 'スティーグリッツが見たニューヨーク、そして現代の路上。',
        excerpt: '近代写真の父が切り取った街の「等価」な美しさ。その視点は、現代のストリートスナップにどう受け継がれているのか。',
        image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800'
    },
    {
        id: 'exposure-ritual',
        category: 'Technique',
        subCategory: 'Ritual',
        date: '2024.04.28',
        title: '露出計と身体感覚の乖離',
        excerpt: 'デジタルカメラが示す適正露出は、果たしてあなたの「見ている世界」を正しく反映しているだろうか。',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'model-mirror',
        category: 'Interview',
        subCategory: 'Dialogue',
        date: '2024.04.15',
        title: 'モデルという鏡、写真家という影',
        excerpt: '互いの信頼関係が構築された瞬間にだけ現れる、奇跡のような均衡点。ポートレート撮影における倫理と境界線。',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'lens-aberration',
        category: 'Technique',
        subCategory: 'Optics',
        date: '2024.03.30',
        title: 'レンズの収差を「欠点」と呼ばない理由',
        excerpt: '完璧な描写は、時に想像力の余白を奪う。古いレンズが描く滲みや歪みの中に、私たちが失いかけたリアリティを探る。',
        image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'monochrome-structure',
        category: 'Philosophy',
        subCategory: 'Art',
        date: '2024.03.15',
        title: 'モノクロームが暴く、光の骨格',
        excerpt: '色という情報が削ぎ落とされた時、そこには純粋な造形と光の意志だけが残る。色彩に頼らない表現の強度について。',
        image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'silence-fieldnote',
        category: 'Gallery',
        subCategory: 'Review',
        date: '2024.02.20',
        title: '沈黙を撮るためのフィールドノート',
        excerpt: '音のない風景に耳を澄ませる。静寂という概念を視覚化するために必要な、精神的な準備とアプローチの記録。',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
    }
];
