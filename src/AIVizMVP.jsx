import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function AIVizMVP() {
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState("");
  const [products, setProducts] = useState([""]);
  const [mappings, setMappings] = useState([{ product: "", problem: "" }]);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">AI Visibility Optimizer</h1>

      {step === 1 && (
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Step 1: Company Info</h2>
            <Input
              placeholder="What does your company do?"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <Button onClick={handleNext}>Next</Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Step 2: Products</h2>
            {products.map((p, i) => (
              <Input
                key={i}
                placeholder={`Product ${i + 1}`}
                value={p}
                onChange={(e) => {
                  const newProds = [...products];
                  newProds[i] = e.target.value;
                  setProducts(newProds);
                }}
              />
            ))}
            <Button onClick={() => setProducts([...products, ""])}>Add Product</Button>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>Back</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Step 3: Problem-Solution Mapping</h2>
            {mappings.map((m, i) => (
              <div key={i} className="space-y-2">
                <Input
                  placeholder="Product"
                  value={m.product}
                  onChange={(e) => {
                    const newMap = [...mappings];
                    newMap[i].product = e.target.value;
                    setMappings(newMap);
                  }}
                />
                <Textarea
                  placeholder="What problem does it solve?"
                  value={m.problem}
                  onChange={(e) => {
                    const newMap = [...mappings];
                    newMap[i].problem = e.target.value;
                    setMappings(newMap);
                  }}
                />
              </div>
            ))}
            <Button onClick={() => setMappings([...mappings, { product: "", problem: "" }])}>Add Mapping</Button>
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>Back</Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card>
          <CardContent className="space-y-4">
            <h2 className="text-xl font-semibold">Step 4: Embed Code</h2>
            <p>Copy this code and paste into your website:</p>
            <pre className="bg-gray-100 p-4 rounded">
              {`<script src="https://yourdomain.com/embed.js?id=demo123"></script>`}
            </pre>
            <Button variant="outline" onClick={handleBack}>Back</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}