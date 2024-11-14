Wyjaśnienie kodu:

1. Odczytywanie artykułu: Funkcja readArticleFile odczytuje zawartość pliku artykul.txt zawierającego artykuł.
2. Zapytanie do API: Funkcja processArticleWithAI buduje prompt i wysyła go do API OpenAI, aby przetworzyć artykuł na kod HTML zgodny z wytycznymi.
3. Zapis do pliku: Funkcja saveHTMLToFile zapisuje wygenerowany kod HTML do pliku artykul.html.
4. Główna funkcja: W main() program czyta plik, przetwarza artykuł, a następnie zapisuje wynik w formie HTML.

Uruchomianie:

Korzystałem z visual studio code aby zrobić zadanie w JS wykorzystując NODE'A a dokładnie node fetch dlatego najpierw trzeba zainstalować NODE'A i w edytorze: 
- otworzyć nowy terminal (konsole)
- należy wpisać: npm install node-fetch
- i aby uruchomić aplikację należy wpisać node app.js gdzie app.js jest nazwą głównego pliku
  
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

ZADANIE DLA CHĘTNYCH:

Wyjaśnienie:

Plik szablon.html jest prostym szablonem, do którego należy wkleić treść artykułu.
Plik podglad.html pobiera treść z szablon.html i wyświetla ją z przyjemnym stylem. Wykorzystuje JavaScript i fetch, aby załadować zawartość.

Uruchomienie:
Przeglądarka wymaga uruchomienia lokalnego serwera, aby odczytać lokalne pliki przez fetch.
Dlatego należy w nowym terminalu konsoli wpisać:

- npm install -g http-server

i uruchomić ten serwer:

- http-server .

I aby uruchomić pliki należy w przeglądarce wkleić wyświetlony adres i ścieżkę pliku np.

- http://localhost:8080/szablon.html
- http://localhost:8080/podglad.html
