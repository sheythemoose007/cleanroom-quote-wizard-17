
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const EmbedInstructions: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('iframe');
  
  // Embed customization state
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(800);
  const [selectedColor, setSelectedColor] = useState('#1EAEDB'); // Default cleanroom blue
  
  // Brand colors from cleanroomsolutions.com
  const brandColors = [
    { name: 'Primary Blue', hex: '#1EAEDB' },
    { name: 'Dark Blue', hex: '#083E8F' },
    { name: 'Light Blue', hex: '#8DB6F5' },
    { name: 'Teal', hex: '#0A5CA9' },
    { name: 'Sky Blue', hex: '#D3E4FD' },
    { name: 'Navy', hex: '#052673' },
    { name: 'Gray', hex: '#8E9196' },
  ];

  // This would be the actual URL of your deployed application
  const appUrl = window.location.origin;
  
  const [iframeCode, setIframeCode] = useState('');
  const [scriptCode, setScriptCode] = useState('');

  // Update embed code when customization options change
  useEffect(() => {
    const updatedIframeCode = `<iframe 
  src="${appUrl}/embed?theme=${encodeURIComponent(selectedColor)}" 
  title="Fan Filter Unit Quote Request Form" 
  width="${width}px" 
  height="${height}px" 
  style="border: none; max-width: 100%; margin: 0 auto; border-top: 4px solid ${selectedColor};" 
  allowfullscreen></iframe>`;

    const updatedScriptCode = `<div id="ffu-quote-form"></div>
<script>
  (function() {
    var iframe = document.createElement('iframe');
    iframe.src = "${appUrl}/embed?theme=${encodeURIComponent(selectedColor)}";
    iframe.title = "Fan Filter Unit Quote Request Form";
    iframe.style.border = "none";
    iframe.style.width = "${width}px";
    iframe.style.height = "${height}px";
    iframe.style.maxWidth = "100%";
    iframe.style.margin = "0 auto";
    iframe.style.borderTop = "4px solid ${selectedColor}";
    
    var container = document.getElementById('ffu-quote-form');
    container.appendChild(iframe);
  })();
</script>`;

    setIframeCode(updatedIframeCode);
    setScriptCode(updatedScriptCode);
  }, [appUrl, width, height, selectedColor]);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Form Embed Instructions</h2>
      
      <div className="mb-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-700">Customize Embed</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="width">Width: {width}px</Label>
                <Input 
                  id="width-input"
                  type="number"
                  value={width} 
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-24"
                  min={300}
                  max={1200}
                />
              </div>
              <Slider
                id="width"
                value={[width]}
                min={300}
                max={1200}
                step={10}
                onValueChange={(value) => setWidth(value[0])}
                className="mb-6"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="height">Height: {height}px</Label>
                <Input 
                  id="height-input"
                  type="number"
                  value={height} 
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-24"
                  min={400}
                  max={1200}
                />
              </div>
              <Slider
                id="height"
                value={[height]}
                min={400}
                max={1200}
                step={10}
                onValueChange={(value) => setHeight(value[0])}
                className="mb-6"
              />
            </div>
            
            <div>
              <Label className="block mb-2">Accent Color</Label>
              <div className="flex flex-wrap gap-2">
                {brandColors.map((color) => (
                  <Popover key={color.hex}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={`w-8 h-8 rounded-full border ${
                          selectedColor === color.hex ? 'ring-2 ring-offset-2 ring-black' : ''
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color.hex)}
                        aria-label={`Select ${color.name} color`}
                      />
                    </PopoverTrigger>
                    <PopoverContent className="p-2 text-xs">
                      {color.name}
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <Button 
            onClick={() => window.open(`/embed?theme=${encodeURIComponent(selectedColor)}`, '_blank')}
            className="bg-cleanroom-500 hover:bg-cleanroom-600 text-white"
          >
            Preview Form
          </Button>
        </div>
      </div>

      <Tabs defaultValue="iframe" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="iframe">iframe Embed</TabsTrigger>
          <TabsTrigger value="javascript">JavaScript Embed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="iframe" className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm overflow-x-auto">
              {iframeCode}
            </pre>
          </div>
          <Button 
            onClick={() => handleCopy(iframeCode)}
            className="bg-cleanroom-500 hover:bg-cleanroom-600 text-white"
          >
            {copied && activeTab === 'iframe' ? 'Copied!' : 'Copy Code'}
          </Button>
        </TabsContent>
        
        <TabsContent value="javascript" className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm overflow-x-auto">
              {scriptCode}
            </pre>
          </div>
          <Button 
            onClick={() => handleCopy(scriptCode)}
            className="bg-cleanroom-500 hover:bg-cleanroom-600 text-white"
          >
            {copied && activeTab === 'javascript' ? 'Copied!' : 'Copy Code'}
          </Button>
        </TabsContent>
      </Tabs>

      <div className="mt-8 border-t pt-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Supabase Integration</h3>
        <p className="text-gray-700 mb-4">
          To connect this form to Supabase, you'll need to:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Connect your Lovable project to Supabase using the Supabase button in the top menu</li>
          <li>Create a table in Supabase with fields matching the form data structure</li>
          <li>Set appropriate security rules for your Supabase table</li>
        </ol>
      </div>
    </div>
  );
};

export default EmbedInstructions;
