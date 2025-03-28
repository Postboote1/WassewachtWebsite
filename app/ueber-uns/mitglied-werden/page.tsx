import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

export default function MitgliedWerdenPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Mitglied werden</h1>
        <p className="text-muted-foreground max-w-3xl">
          Werden Sie Teil der Wasserwacht Großmehring und engagieren Sie sich für die Sicherheit an Gewässern. Wir
          bieten verschiedene Möglichkeiten der Mitgliedschaft.
        </p>
      </div>

      <Tabs defaultValue="aktiv" className="mt-8">
        <TabsList className="flex flex-wrap h-auto p-0 bg-transparent gap-2 mb-6">
          <TabsTrigger
            value="aktiv"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Aktive Mitgliedschaft
          </TabsTrigger>
          <TabsTrigger
            value="foerder"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Fördermitgliedschaft
          </TabsTrigger>
          <TabsTrigger
            value="jugend"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Jugendmitgliedschaft
          </TabsTrigger>
        </TabsList>

        <TabsContent value="aktiv">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Aktive Mitgliedschaft</h2>
              <p className="text-muted-foreground mb-4">
                Als aktives Mitglied der Wasserwacht Großmehring nehmen Sie an Einsätzen, Übungen und Ausbildungen teil.
                Sie werden Teil eines engagierten Teams und leisten einen wichtigen Beitrag zur Sicherheit an Gewässern.
              </p>
              <p className="text-muted-foreground mb-4">Voraussetzungen für die aktive Mitgliedschaft:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Mindestalter 16 Jahre (mit Einverständnis der Eltern)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Deutsches Rettungsschwimmabzeichen Silber (kann bei uns erworben werden)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Erste-Hilfe-Kurs (kann bei uns absolviert werden)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Bereitschaft zur regelmäßigen Teilnahme an Übungen und Einsätzen</span>
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Der Mitgliedsbeitrag für aktive Mitglieder beträgt 30 Euro pro Jahr. Darin enthalten sind die
                Ausbildungskosten und die Versicherung während der Einsätze.
              </p>
              <Link href="/kontakt">
                <Button>Jetzt Mitglied werden</Button>
              </Link>
            </div>
            <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Aktive Mitgliedschaft"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="foerder">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Fördermitgliedschaft</h2>
              <p className="text-muted-foreground mb-4">
                Als Fördermitglied unterstützen Sie die Arbeit der Wasserwacht Großmehring finanziell. Sie tragen dazu
                bei, dass wir unsere Ausrüstung modernisieren, Ausbildungen durchführen und Einsätze leisten können.
              </p>
              <p className="text-muted-foreground mb-4">Vorteile der Fördermitgliedschaft:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Unterstützung einer wichtigen ehrenamtlichen Organisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Regelmäßige Informationen über unsere Aktivitäten</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Einladung zu Veranstaltungen der Wasserwacht</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Steuerliche Absetzbarkeit des Mitgliedsbeitrags</span>
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Der Mindestbeitrag für Fördermitglieder beträgt 20 Euro pro Jahr. Sie können aber auch einen höheren
                Beitrag wählen und uns damit noch mehr unterstützen.
              </p>
              <Link href="/kontakt">
                <Button>Jetzt Fördermitglied werden</Button>
              </Link>
            </div>
            <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fördermitgliedschaft"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="jugend">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold mb-4">Jugendmitgliedschaft</h2>
              <p className="text-muted-foreground mb-4">
                Für Kinder und Jugendliche bieten wir eine spezielle Jugendmitgliedschaft an. In unseren Jugendgruppen
                lernen sie spielerisch die Grundlagen der Wasserrettung und entwickeln wichtige soziale Kompetenzen.
              </p>
              <p className="text-muted-foreground mb-4">Vorteile der Jugendmitgliedschaft:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Schwimmtraining und Rettungsschwimmausbildung</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Erste-Hilfe-Kurse speziell für Kinder und Jugendliche</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Freizeitaktivitäten wie Ausflüge und Zeltlager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <span>Teilnahme an Wettbewerben</span>
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Der Mitgliedsbeitrag für Jugendmitglieder beträgt 15 Euro pro Jahr. Die Jugendgruppen treffen sich
                regelmäßig zum Training und zu gemeinsamen Aktivitäten.
              </p>
              <Link href="/kontakt">
                <Button>Jetzt Jugendmitglied werden</Button>
              </Link>
            </div>
            <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Jugendmitgliedschaft"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Häufig gestellte Fragen</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Wie kann ich Mitglied werden?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Füllen Sie einfach das Anmeldeformular aus und senden Sie es an uns. Sie können das Formular hier
                herunterladen oder bei uns persönlich abholen. Nach Eingang Ihrer Anmeldung setzen wir uns mit Ihnen in
                Verbindung.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Welche Ausbildungen bietet die Wasserwacht?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Wir bieten verschiedene Ausbildungen an, darunter Rettungsschwimmkurse, Erste-Hilfe-Kurse,
                Sanitätsausbildungen und spezielle Ausbildungen für den Wasserrettungsdienst. Die Ausbildungen sind für
                Mitglieder kostenlos.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Wie viel Zeit muss ich investieren?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Das hängt von Ihrem persönlichen Engagement ab. Wir freuen uns über jede Unterstützung. Als aktives
                Mitglied sollten Sie regelmäßig an Übungen und Einsätzen teilnehmen, aber wir berücksichtigen natürlich
                Ihre persönlichen Möglichkeiten.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

