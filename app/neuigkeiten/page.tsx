import { Button } from "@/components/ui/button"
import { SectionNews } from "@/components/section-news"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NeuigkeitenPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Neuigkeiten</h1>
          <p className="text-muted-foreground">Aktuelle Nachrichten und Berichte aus unserer Ortsgruppe</p>
        </div>
        <Button>Alle Neuigkeiten</Button>
      </div>

      <Tabs defaultValue="alle" className="mt-8">
        <TabsList className="flex flex-wrap h-auto p-0 bg-transparent gap-2 mb-6">
          <TabsTrigger
            value="alle"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Alle Bereiche
          </TabsTrigger>
          <TabsTrigger
            value="wasserrettung"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Wasserrettung
          </TabsTrigger>
          <TabsTrigger
            value="jugendarbeit"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Jugendarbeit
          </TabsTrigger>
          <TabsTrigger
            value="helfer-vor-ort"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Helfer vor Ort
          </TabsTrigger>
          <TabsTrigger
            value="sanitaetsdienste"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Sanitätsdienste
          </TabsTrigger>
          <TabsTrigger
            value="wachstation"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-md"
          >
            Wachstation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alle">
          <SectionNews limit={9} />
        </TabsContent>
        <TabsContent value="wasserrettung">
          <SectionNews category="wasserrettung" limit={9} />
        </TabsContent>
        <TabsContent value="jugendarbeit">
          <SectionNews category="jugendarbeit" limit={9} />
        </TabsContent>
        <TabsContent value="helfer-vor-ort">
          <SectionNews category="helfer-vor-ort" limit={9} />
        </TabsContent>
        <TabsContent value="sanitaetsdienste">
          <SectionNews category="sanitaetsdienste" limit={9} />
        </TabsContent>
        <TabsContent value="wachstation">
          <SectionNews category="wachstation" limit={9} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

