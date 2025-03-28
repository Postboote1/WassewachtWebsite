import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AufgabenbereichePage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Aufgabenbereiche</h1>
        <p className="text-muted-foreground max-w-3xl">
          Die Wasserwacht Großmehring ist in verschiedenen Bereichen tätig. Hier erhalten Sie einen Überblick über
          unsere Aufgaben und Tätigkeitsfelder.
        </p>
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-2">
        <div>
          <Card className="h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Wasserrettungsdienst"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Wasserrettungsdienst</CardTitle>
              <CardDescription>Sicherheit an Gewässern</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Wachdienst</AccordionTrigger>
                  <AccordionContent>
                    Während der Badesaison übernehmen wir den Wachdienst an Badeseen und Freibädern. Unsere
                    ausgebildeten Rettungsschwimmer sorgen für die Sicherheit der Badegäste und leisten bei Bedarf Erste
                    Hilfe.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Rettungseinsätze</AccordionTrigger>
                  <AccordionContent>
                    Bei Notfällen am und im Wasser führen wir Rettungseinsätze durch. Dazu gehören die Rettung von
                    Personen aus dem Wasser, die Suche nach vermissten Personen und die Bergung von Verunglückten.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Katastrophenschutz</AccordionTrigger>
                  <AccordionContent>
                    Im Rahmen des Katastrophenschutzes sind wir bei Hochwasser und anderen Naturkatastrophen im Einsatz.
                    Wir unterstützen bei Evakuierungen, Deichsicherungen und anderen Maßnahmen zum Schutz der
                    Bevölkerung.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Sanitätsdienst" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>Sanitätsdienst</CardTitle>
              <CardDescription>Medizinische Versorgung bei Veranstaltungen</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Veranstaltungsbetreuung</AccordionTrigger>
                  <AccordionContent>
                    Bei Sportveranstaltungen, Festen und anderen Events stellen wir den Sanitätsdienst. Unsere Sanitäter
                    sind für die medizinische Erstversorgung von Teilnehmern und Besuchern zuständig.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Erste Hilfe</AccordionTrigger>
                  <AccordionContent>
                    Wir leisten Erste Hilfe bei Verletzungen und Erkrankungen. Dazu gehören die Versorgung von Wunden,
                    die Stabilisierung von Kreislaufproblemen und die Betreuung von Patienten bis zum Eintreffen des
                    Rettungsdienstes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Patientenbetreuung</AccordionTrigger>
                  <AccordionContent>
                    Neben der medizinischen Versorgung betreuen wir Patienten auch psychisch. Wir bieten Trost und
                    Unterstützung in Notfallsituationen und sorgen für das Wohlbefinden der Betroffenen.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Ausbildung" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>Ausbildung</CardTitle>
              <CardDescription>Schulung von Mitgliedern und Bürgern</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Schwimmausbildung</AccordionTrigger>
                  <AccordionContent>
                    Wir bieten Schwimmkurse für Kinder und Erwachsene an. Von der Wassergewöhnung bis zum
                    Rettungsschwimmen vermitteln wir alle wichtigen Fähigkeiten für den sicheren Aufenthalt im Wasser.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Rettungsschwimmausbildung</AccordionTrigger>
                  <AccordionContent>
                    In unseren Rettungsschwimmkursen bilden wir Rettungsschwimmer aus. Die Teilnehmer lernen, wie sie
                    Menschen aus dem Wasser retten und Erste Hilfe leisten können.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Erste-Hilfe-Kurse</AccordionTrigger>
                  <AccordionContent>
                    Wir führen Erste-Hilfe-Kurse für die Bevölkerung durch. Die Teilnehmer lernen, wie sie in
                    Notfallsituationen richtig handeln und Leben retten können.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Jugendarbeit" fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>Jugendarbeit</CardTitle>
              <CardDescription>Förderung des Nachwuchses</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Jugendgruppen</AccordionTrigger>
                  <AccordionContent>
                    In unseren Jugendgruppen lernen Kinder und Jugendliche spielerisch die Grundlagen der Wasserrettung.
                    Sie werden an die Aufgaben der Wasserwacht herangeführt und entwickeln wichtige soziale Kompetenzen.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Freizeitaktivitäten</AccordionTrigger>
                  <AccordionContent>
                    Wir organisieren Ausflüge, Zeltlager und andere Freizeitaktivitäten für unsere Jugendmitglieder.
                    Dabei steht der Spaß im Vordergrund, aber auch das Gemeinschaftsgefühl und die Teamfähigkeit werden
                    gestärkt.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Wettbewerbe</AccordionTrigger>
                  <AccordionContent>
                    Unsere Jugendgruppen nehmen an Wettbewerben teil, bei denen sie ihr Können unter Beweis stellen
                    können. Die Vorbereitung auf diese Wettbewerbe fördert die Motivation und den Teamgeist.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

