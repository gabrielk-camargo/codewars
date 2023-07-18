def greet(language):
    welcomeList = ["Welcome","Vitejte","Velkomst","Welkom","Tere tulemast","Tervetuloa","Welgekomen","Bienvenue","Willkommen","Failte","Benvenuto","Gaidits","Laukiamas","Witamy","Bienvenido","Valkommen","Croeso"]
    languageList = ["english","czech","danish","dutch","estonian","finnish","flemish","french","german","irish","italian","latvian","lithuanian","polish","spanish","swedish","welsh"]

    # Verifica se a linguagem está presente na lista
    if language in languageList:
        index = languageList.index(language.lower())
        return welcomeList[index]
    else:
        return "Welcome"