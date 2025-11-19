


export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center animate-fadeIn">
        Добродошли на блог о психотерапији
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
       
        <p className="text-lg leading-relaxed">
          Психотерапија је важан процес који помаже људима да разумеју своје емоције, 
          разреше личне проблеме и пронађу нове начине за бољи живот. На овом блогу ћемо 
          писати о различитим техникама, саветима и искуствима из света терапије.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Последњи чланци</h2>
      <ul className="space-y-6">
        <li className="p-4 border rounded-lg shadow hover:bg-blue-50 transition-colors cursor-default">
          <h3 className="text-xl font-semibold text-blue-800">Увод у психотерапију</h3>
          <p className="text-gray-700">
            Психотерапија је пут ка бољем разумевању себе и решавању унутрашњих сукоба...
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow hover:bg-blue-50 transition-colors cursor-default">
          <h3 className="text-xl font-semibold text-blue-800">Како психотерапија може помоћи</h3>
          <p className="text-gray-700">
            У овом чланку сазнајте како терапија помаже у стресу, анксиозности и депресији.
          </p>
        </li>
        <li className="p-4 border rounded-lg shadow hover:bg-blue-50 transition-colors cursor-default">
          <h3 className="text-xl font-semibold text-blue-800">Врсте психотерапије</h3>
          <p className="text-gray-700">
            Познавање различитих врста терапије може вам помоћи да одаберете праву за себе.
          </p>
             <p className="text-lg leading-relaxed">
          Психотерапија је важан процес који помаже људима да разумеју своје емоције, 
          разреше личне проблеме и пронађу нове начине за бољи живот. На овом блогу ћемо 
          писати о различитим техникама, саветима и искуствима из света терапије.
        </p>
           <p className="text-lg leading-relaxed">
          Психотерапија је важан процес који помаже људима да разумеју своје емоције, 
          разреше личне проблеме и пронађу нове начине за бољи живот. На овом блогу ћемо 
          писати о различитим техникама, саветима и искуствима из света терапије.
        </p>
           <p className="text-lg leading-relaxed">
          Психотерапија је важан процес који помаже људима да разумеју своје емоције, 
          разреше личне проблеме и пронађу нове начине за бољи живот. На овом блогу ћемо 
          писати о различитим техникама, саветима и искуствима из света терапије.
        </p>
           <p className="text-lg leading-relaxed">
          Психотерапија је важан процес који помаже људима да разумеју своје емоције, 
          разреше личне проблеме и пронађу нове начине за бољи живот. На овом блогу ћемо 
          писати о различитим техникама, саветима и искуствима из света терапије.
        </p>

        </li>
      </ul>
<div className="galleryItem" tabIndex={0}>
  <img
    src="/images/therapy-concepts-blog.webp"
    alt="Психотерапија"
    className="galleryImg"
  />
  <div className="caption">
    <h4>PRIRODA</h4>
  </div>
</div>
    </div>
  );
}
