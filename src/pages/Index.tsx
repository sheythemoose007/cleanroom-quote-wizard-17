
import React from 'react';
import { Button } from '@/components/ui/button';
import CleanroomQuizForm from '../components/CleanroomQuizForm';
import EmbedInstructions from '../components/EmbedInstructions';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Fan Filter Unit Quote Wizard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A customizable, embeddable configuration form for requesting Fan Filter Unit quotes
          </p>
        </header>

        <Tabs defaultValue="preview" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="preview">Form Preview</TabsTrigger>
            <TabsTrigger value="embed">Embed Instructions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preview" className="mt-6">
            <div className="max-w-3xl mx-auto">
              <CleanroomQuizForm />
            </div>
          </TabsContent>
          
          <TabsContent value="embed" className="mt-6">
            <EmbedInstructions />
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <Separator className="mb-10" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to integrate with your product page?</h2>
          <p className="text-gray-600 mb-6">
            Follow the embed instructions to add this form to your Fan Filter Unit product pages and start receiving qualified quote requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-cleanroom-600 hover:bg-cleanroom-700 text-white"
              asChild
            >
              <a href="/embed">View Standalone Form</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
