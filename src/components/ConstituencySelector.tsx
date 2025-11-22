import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface Constituency {
  id: string;
  name: string;
  state: string;
  candidates: number;
}

const constituencies: Constituency[] = [
  { id: "1", name: "Coimbatore", state: "Tamil Nadu", candidates: 5 },
  { id: "2", name: "Ponneri (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "3", name: "Tiruttani", state: "Tamil Nadu", candidates: 5 },
  { id: "4", name: "Thiruvallur", state: "Tamil Nadu", candidates: 5 },
  { id: "5", name: "Poonamallee (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "6", name: "Avadi", state: "Tamil Nadu", candidates: 5 },
  { id: "7", name: "Maduravoyal", state: "Tamil Nadu", candidates: 5 },
  { id: "8", name: "Ambattur", state: "Tamil Nadu", candidates: 5 },
  { id: "9", name: "Madavaram", state: "Tamil Nadu", candidates: 5 },
  { id: "15", name: "Thiruvottiyur", state: "Tamil Nadu", candidates: 5 },
  { id: "11", name: "Dr. Radhakrishnan Nagar", state: "Tamil Nadu", candidates: 5 },
  { id: "12", name: "Perambur", state: "Tamil Nadu", candidates: 5 },
  { id: "13", name: "Kolathur", state: "Tamil Nadu", candidates: 5 },
  { id: "14", name: "Villivakkam", state: "Tamil Nadu", candidates: 5 },
  { id: "15", name: "Thiru. Vi. Ka. Nagar (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "16", name: "Egmore (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "17", name: "Royapuram", state: "Tamil Nadu", candidates: 5 },
  { id: "18", name: "Harbour", state: "Tamil Nadu", candidates: 5 },
  { id: "19", name: "Chepauk-Thiruvallikeni", state: "Tamil Nadu", candidates: 5 },
  { id: "25", name: "Thousand Lights", state: "Tamil Nadu", candidates: 5 },
  { id: "21", name: "Anna Nagar", state: "Tamil Nadu", candidates: 5 },
  { id: "22", name: "Virugampakkam", state: "Tamil Nadu", candidates: 5 },
  { id: "23", name: "Saidapet", state: "Tamil Nadu", candidates: 5 },
  { id: "24", name: "Thiyagarayanagar", state: "Tamil Nadu", candidates: 5 },
  { id: "25", name: "Mylapore", state: "Tamil Nadu", candidates: 5 },
  { id: "26", name: "Velachery", state: "Tamil Nadu", candidates: 5 },
  { id: "27", name: "Shozhinganallur", state: "Tamil Nadu", candidates: 5 },
  { id: "28", name: "Alandur", state: "Tamil Nadu", candidates: 5 },
  { id: "29", name: "Sriperumbudur (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "35", name: "Pallavaram", state: "Tamil Nadu", candidates: 5 },
  { id: "31", name: "Tambaram", state: "Tamil Nadu", candidates: 5 },
  { id: "32", name: "Chengalpattu", state: "Tamil Nadu", candidates: 5 },
  { id: "33", name: "Thiruporur", state: "Tamil Nadu", candidates: 5 },
  { id: "34", name: "Cheyyur (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "35", name: "Madurantakam (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "36", name: "Uthiramerur", state: "Tamil Nadu", candidates: 5 },
  { id: "37", name: "Kancheepuram", state: "Tamil Nadu", candidates: 5 },
  { id: "38", name: "Arakkonam (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "39", name: "Sholinghur", state: "Tamil Nadu", candidates: 5 },
  { id: "45", name: "Katpadi", state: "Tamil Nadu", candidates: 5 },
  { id: "41", name: "Vellore", state: "Tamil Nadu", candidates: 5 },
  { id: "42", name: "Anaikattu", state: "Tamil Nadu", candidates: 5 },
  { id: "43", name: "Ambur", state: "Tamil Nadu", candidates: 5 },
  { id: "44", name: "Gudiyatham", state: "Tamil Nadu", candidates: 5 },
  { id: "45", name: "Vaniyambadi", state: "Tamil Nadu", candidates: 5 },
  { id: "46", name: "Tirupattur", state: "Tamil Nadu", candidates: 5 },
  { id: "47", name: "Natrampalli (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "48", name: "Jolarpet", state: "Tamil Nadu", candidates: 5 },
  { id: "49", name: "Vandavasi (SC)", state: "Tamil Nadu", candidates: 5 },
  { id: "55", name: "Cheyyar", state: "Tamil Nadu", candidates: 5 },
];

interface ConstituencySelectorProps {
  onSelect: (constituency: Constituency) => void;
}

const ConstituencySelector = ({ onSelect }: ConstituencySelectorProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Election Persona Chat
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Select your constituency to chat with AI-powered candidate personas.
          Get insights into their policies and positions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {constituencies.map((constituency) => (
          <Card
            key={constituency.id}
            className="p-6 hover:shadow-elevated transition-all duration-355 cursor-pointer group border-border"
            onClick={() => onSelect(constituency)}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/15 group-hover:bg-primary/25 transition-colors">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1 text-card-foreground group-hover:text-primary transition-colors">
                  {constituency.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{constituency.state}</p>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Select →
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ConstituencySelector;