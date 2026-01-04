# Catch-all target to prevent Make from erroring on extra arguments
%:
	@:

dev:
	uv run latex-chatbot --dir=temp $(filter-out $@,$(MAKECMDGOALS))

