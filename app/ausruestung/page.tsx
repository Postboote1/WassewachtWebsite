import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AusruestungPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Ausrüstung</h1>
        <p className="text-muted-foreground max-w-3xl">
          Die Wasserwacht Großmehring verfügt über moderne Ausrüstung für verschiedene Einsatzbereiche. Hier erhalten
          Sie einen Überblick über unsere technische Ausstattung.
        </p>
      </div>

      <Tabs defaultValue="wasserrettung" className="mt-8">
        <TabsList className="flex flex-wrap h-auto p-0 bg-transparent gap-2 mb-6">
          <TabsTrigger
            value="wasserrettung"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Wasserrettung
          </TabsTrigger>
          <TabsTrigger
            value="sanitaetsdienst"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Sanitätsdienst
          </TabsTrigger>
          <TabsTrigger
            value="fahrzeuge"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Fahrzeuge
          </TabsTrigger>
          <TabsTrigger
            value="kommunikation"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Kommunikation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="wasserrettung">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Rettungsbrett" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Rettungsbrett</CardTitle>
                <CardDescription>Für schnelle Rettungseinsätze im Wasser</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Das Rettungsbrett ermöglicht eine schnelle Rettung von Personen im Wasser. Es ist leicht zu
                  transportieren und bietet eine stabile Plattform für die Rettung.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Rettungsboot" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Rettungsboot</CardTitle>
                <CardDescription>Motorisiertes Boot für Einsätze auf dem Wasser</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Unser Rettungsboot ist mit modernster Technik ausgestattet und ermöglicht schnelle Einsätze auf dem
                  Wasser. Es bietet Platz für mehrere Rettungsschwimmer und Patienten.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Rettungswesten" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Rettungswesten</CardTitle>
                <CardDescription>Schwimmhilfen für die Sicherheit im Wasser</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Unsere Rettungswesten sorgen für Auftrieb und Sicherheit im Wasser. Sie sind in verschiedenen Größen
                  verfügbar und werden regelmäßig gewartet.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sanitaetsdienst">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Notfallrucksack"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Notfallrucksack</CardTitle>
                <CardDescription>Ausrüstung für medizinische Notfälle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Unser Notfallrucksack enthält alle wichtigen Materialien für die Erstversorgung von Patienten. Er ist
                  kompakt und kann schnell zum Einsatzort transportiert werden.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AED (Defibrillator)"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>AED (Defibrillator)</CardTitle>
                <CardDescription>Lebensrettende Technologie bei Herzstillstand</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Der automatisierte externe Defibrillator (AED) kann bei Herzrhythmusstörungen eingesetzt werden und
                  Leben retten. Unsere Helfer sind im Umgang mit dem AED geschult.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Trage" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Trage</CardTitle>
                <CardDescription>Für den sicheren Transport von Patienten</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Unsere Tragen ermöglichen den sicheren und schonenden Transport von Patienten. Sie sind leicht zu
                  handhaben und können auch in schwierigem Gelände eingesetzt werden.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fahrzeuge">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Einsatzfahrzeug"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Einsatzfahrzeug</CardTitle>
                <CardDescription>Für den schnellen Transport zum Einsatzort</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Unser Einsatzfahrzeug ist mit Blaulicht und Martinshorn ausgestattet und ermöglicht den schnellen
                  Transport von Personal und Material zum Einsatzort. Es bietet Platz für bis zu 9 Personen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Bootsanhänger" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Bootsanhänger</CardTitle>
                <CardDescription>Für den Transport unseres Rettungsbootes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mit unserem Bootsanhänger können wir unser Rettungsboot schnell zu verschiedenen Einsatzorten
                  transportieren. Der Anhänger ist speziell für den Transport von Booten konzipiert.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="kommunikation">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image src="/placeholder.svg?height=400&width=600" alt="Funkgeräte" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Funkgeräte</CardTitle>
                <CardDescription>Für die Kommunikation im Einsatz</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Unsere Funkgeräte ermöglichen eine zuverlässige Kommunikation zwischen den Einsatzkräften. Sie sind
                  wasserdicht und haben eine hohe Reichweite.
                </p>
              </CardContent>
            </Card>
            <Card>
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Einsatzleitstelle"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Einsatzleitstelle</CardTitle>
                <CardDescription>Zentrale Koordination von Einsätzen</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  In unserer Einsatzleitstelle laufen alle Informationen zusammen. Von hier aus werden Einsätze
                  koordiniert und dokumentiert.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

