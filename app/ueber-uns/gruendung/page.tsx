import Image from "next/image"

export default function GruendungPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Gründung</h1>
        <p className="text-muted-foreground max-w-3xl">
          Die Geschichte der Wasserwacht Großmehring von den Anfängen bis heute.
        </p>
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4">Die Anfänge</h2>
          <p className="text-muted-foreground mb-4">
            Die Wasserwacht Großmehring wurde im Jahr 1965 gegründet. Damals schlossen sich einige engagierte Bürger
            zusammen, um die Sicherheit an den lokalen Gewässern zu verbessern. Mit einfacher Ausrüstung und viel
            Engagement begannen sie, Wachdienste am Baggersee zu leisten.
          </p>
          <p className="text-muted-foreground mb-4">
            In den ersten Jahren konzentrierte sich die Arbeit hauptsächlich auf die Wasserrettung und die Ausbildung
            von Rettungsschwimmern. Die Mitgliederzahl wuchs stetig, und bald konnte die Ortsgruppe auch eigene
            Ausbildungskurse anbieten.
          </p>
          <p className="text-muted-foreground">
            Ein wichtiger Meilenstein war die Anschaffung des ersten Rettungsbootes im Jahr 1972. Damit konnten die
            Einsatzmöglichkeiten deutlich erweitert werden.
          </p>
        </div>
        <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Gründung der Wasserwacht Großmehring"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Wachstation der Wasserwacht Großmehring"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Entwicklung und Wachstum</h2>
          <p className="text-muted-foreground mb-4">
            In den 1980er Jahren erweiterte die Wasserwacht Großmehring ihr Aufgabenspektrum. Neben der Wasserrettung
            kamen der Sanitätsdienst und die Jugendarbeit hinzu. Die Ortsgruppe beteiligte sich auch verstärkt am
            Katastrophenschutz.
          </p>
          <p className="text-muted-foreground mb-4">
            Ein wichtiger Schritt war der Bau der eigenen Wachstation im Jahr 1992. Damit hatte die Ortsgruppe endlich
            ein eigenes Zuhause, in dem Ausrüstung gelagert, Ausbildungen durchgeführt und Treffen abgehalten werden
            konnten.
          </p>
          <p className="text-muted-foreground">
            In den folgenden Jahren wurde die Ausrüstung kontinuierlich modernisiert und erweitert. Neue Rettungsboote,
            Einsatzfahrzeuge und medizinische Geräte verbesserten die Einsatzmöglichkeiten.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Die Wasserwacht heute</h2>
          <p className="text-muted-foreground mb-4">
            Heute ist die Wasserwacht Großmehring eine moderne Hilfsorganisation mit rund 100 aktiven Mitgliedern. Die
            Ortsgruppe ist in verschiedenen Bereichen tätig, von der Wasserrettung über den Sanitätsdienst bis hin zur
            Jugendarbeit und dem Katastrophenschutz.
          </p>
          <p className="text-muted-foreground mb-4">
            Die Ausbildung der Mitglieder hat einen hohen Stellenwert. Regelmäßige Übungen und Fortbildungen sorgen
            dafür, dass alle Einsatzkräfte auf dem neuesten Stand sind und in Notfallsituationen kompetent handeln
            können.
          </p>
          <p className="text-muted-foreground">
            Die Wasserwacht Großmehring ist ein wichtiger Teil des Rettungsdienstes in der Region und arbeitet eng mit
            anderen Hilfsorganisationen zusammen. Durch ihr Engagement trägt sie maßgeblich zur Sicherheit der
            Bevölkerung bei.
          </p>
        </div>
        <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Moderne Wasserwacht Großmehring"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

