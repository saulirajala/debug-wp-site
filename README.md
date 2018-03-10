# debug-wp-site
## What is wrong with my WordPress site?
So your WordPress-site just gave you the "white screen of death" or some other error? You have been all over the place in WP admin and code, but problem still occurs? Been there, done that. ✋

Maybe this "decision tree" -like tool will help you to find out what is wrong with your WP-site.

### Questions
1. Auttaako välimuistin tyhjennys?
  - Kyllä => 21.
  - Ei => 2.
2. Tuleeko tuotannossa selaimen konsoliin mitään?
  - Kyllä => 22.
  - Ei => 3.
3. Tuleeko tuotannon error lokiin mitään?
  - Kyllä => 23.
  - Ei => 4.
4. Toistuuko ongelma kaikissa selaimissa?
  - Kyllä => 5.
  - Ei => 5. 
5. Toistuuko ongelma kehitysympäristössä?
  - Kyllä => 10.
  - Ei => 6.
6. Onko kehitysympäristön koodi ajantasalla?
  - Kyllä => 7.
  - Ei => 7.
7. Onko kehitysympäristössä sama versio WP:stä?
  - Kyllä => 8.
  - Ei => 8.
8. Onko kehitysympäristössä ajantasainen tietokanta?
  - Kyllä => 9.
  - Ei => 9. 
9. Toistuuko ongelma *nyt* kehitysympärisössä?
  - Kyllä => 10.
  - Ei => 22.
10. Tiedätkö kuka on syyllinen?
  - Teema => 14.
  - Plugarit => 11.
  - Core => 14.
  - En => 13.
11. Tiedätkö missä plugarissa vika on?
  - Kyllä => 14.
  - En => 12.
12. Ota plugari kerrallaan pois päältä => saat tietää missä plugarissa vika
  - Plugari selvitetty => 14.
13. Ota vuorotellen teema, mu-plugins ja plugins pois päältä
  - Löysin syyllisen => 10.
14. Auttaisiko lisäosan/Coren/teeman päivitys?
  - Kyllä => 24.
  - Ei/ei oo tullut päivityksiä => 15.
15. Onko homma toiminut aiemmin? 
  - Kyllä/EOS => 16.
  - Ei => 18.
16. Etsi gitin, composerin tai wp clin avulla versio, jossa homma toimi.
  - Löytyi! => 17.
  - Ei oo tainnut toimia koskaan… => 18.
17. Mitä on muuttunut?
  - Liikaa! => 18.
  - Aa, tämä muutos aiheutti ongelman! => 20.
18. Onko ongelma frontissa vai backendissä?
  - Frontti/admin => 19.
  - Enemmän backendin juttuja => 19. 
19. Hae koodista sopivilla hakusanoilla. Esim. HTML:n seassa olevilla classin nimillä, tms. Löytyikö vikakohta?
  - Kyllä => 20.
  - Ei => Sorry! I'm out of ideas!
20. Onneksi olkoon! 🎉 Löysit ongelman juurisyyn. Enää pitäisi vain korjata se… Jos kyseessä on selkeä bugi, lähetä bugiraportti kehittäjälle.
21. Loistavaa! Sait ongelman korjattua!
22. Johdattaako virheviesti syyllisen jäljille?
  - Kyllä => 10.
  - Ei => 3. 
23. Johdattaako error loki syyllisen jäljille?
  - Kyllä => 10.
  - Ei => 4. 
24. Tyhjensitkö varmasti välimuistin tuotannosta?
  - Kyllä => 10.
  - No en. Luulin, ettei se nyt siitä voi johtua => 23.
25. Auttoiko välimuistin tyhjennys?
  - Kyllä => Olisko kannattanut heti tyhjentää?
  - Ei => 10.
26. Onneksi olkoon! 🎉 Sait ongelman korjattua! Ei muuta kuin koodit tuotantoon, leuka rintaan ja kohti uusia haasteita 💪